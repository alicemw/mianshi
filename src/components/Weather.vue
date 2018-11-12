<template>
  <div class="weather-con">
    <div class="head">
      <span class="cur-city">当前城市: {{cityName}}</span>
      
      <div class="input">
          <label for="cityname">请输入城市名</label>
         <input type="text" name="cityname" @keydown.enter="checkName" @input="test" v-model="cityName" placeholder="城市名">
        <ul class="filter" v-show="filterData.length>0">
          <li v-for="(item,index) in filterData" :key="index" @click="getData(item)" >
            {{item.city_name}}
          </li>
        </ul>
      </div>
    </div>
      <div class="weather">
        <div class="item" v-for="(item,index) in forecast" :key="index">
          <p>{{item.date}}</p>
          <p>{{item.fl}}</p>
          <p>{{item.type}}</p>
          <p>{{item.low}}/{{item.high}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import cityData from "@/assets/_city.json";
import axios from "axios";
export default {
  name: "Weather",
  data() {
    return {
      cityName: "",
      cityCode: "",
      cityData: cityData,
      forecast: {},
      filterData: []
    };
  },
  methods: {
    test() {
      this.filterData = [];
      if (this.cityName != "") {
        this.cityData.forEach(element => {
          if (element.city_name.indexOf(this.cityName) !== -1) {
            this.filterData.push(element);
          }
        });
        if(this.filterData.length ==0){
          alert('找不到城市')
        }
      } else {
        this.filterData = [];
      }
    },
    getData(item) {
      this.cityName = item.city_name;
      if (item.city_code != "") {
        axios
          .get("http://t.weather.sojson.com/api/weather/city/" + item.city_code)
          .then(res => {
            this.forecast = res.data.data.forecast.slice(0, 3);
            this.filterData = [];
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-con {
  width: 1000px;
  position: relative;
  margin: 0 auto;
  padding: 20px;
}
.input {
  position: relative;
}
.head {
  position: relative;
  display: flex;
  justify-content: space-around;
}

.cur-city {
  position: absolute;
  left: 0;
  top: 0;
}
.weather {
  display: flex;
  padding-top: 30px;
}
.weather .item {
  width: 30%;
}
.filter {
  width: 100px;
  position: absolute;
  top: 20px;
  left: 100px;
  height: auto;
  max-height: 100px;
  background: #fff;
  border: 1px solid #e8e8e8;
  overflow: scroll;
}
.filter li {
  border-bottom: 1px solid #e8e8e8;
  padding: 5px;
  text-align: center;
}
.filter::-webkit-scrollbar {
  display: none;
}
</style>
