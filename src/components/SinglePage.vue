<template>
  <div class="survey">
    <div class="content">
      <div class="inner">
        <header class="content-header">
          <h1 class="title">
            {{title}}
          </h1>
          <div class="header-tip">
            <span>尊敬的同事：</span>
            <p>您好！感谢您在百忙之中填写问卷，请您根据自己的实际感受和看法如实填写，本问卷采用匿名形式，所有数据仅供了解整体员工满意度情况，不针对个别数据进行研究。</p>
          </div>
        </header>
        <div class="main">
          <div class="ques" v-for="(item,index) in ques" :key="index">
            <div class="ques-title">
              {{item.name}}
            </div>
            <div class="sub-ques" v-for="(ques,key) in item.children" :key="key">
              <div class="sub-title">
                {{ques.name}}
              </div>
              <ul class="answers" v-if="ques.answers == ''">
                <textarea name="suggest" id="" style="width:60%;height:100px" ></textarea>
              </ul>
              <ul class="answers" v-else>
                <li v-for="(ans,idx) in ques.answers" :key="idx" :style="{width:ques.width}">
                  
                  <input type="radio" :name="ques.name" :id="index+''+key+''+idx">
                  <label :for="index+''+key+''+idx">{{ans}}</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="submit">
            <button>提交答卷</button>
          </div>
        </div>
      </div>
      <div class="bottom">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePage',
  data () {
    return {
      title: '员工满意度调查',
      ques:[
        {
          name:'一、您的基本情况',
          children:[
            {
              name:'1、	您的婚姻情况',
              answers:[
                'A 未婚',
                'B 已婚未生育',
                'C 已婚已生育'
              ],
              width:'20%'
            },
            {
              name:'你预计什么时候结婚（关联逻辑：此题针对第一题中选择“未婚”的人群）',
              answers:[
                '一年内',
                '三年内',
                '五年内',
              ],
              width:'20%'
            },
            {
              name:'2、	您的年龄：',
              answers:[
                'A 25岁以下',
                'B 26-35岁',
                'C 36-45岁',
                'D 45岁以上'
              ],
              width:'25%'
            },
            {
              name:'3、	您的最高学历：',
              answers:[
                'A高中/中专及以下',
                'B大专',
                'C本科',
                'D硕士及以上'
              ],
              width:'25%'
            },
            {
              name:'4、	您的工作年限：（跳题逻辑：选择A项，直接跳转到问卷末尾，因为本次调查不针对0到3个月的员工。）',
              answers:[
                'A 0-3个月',
                'B 3-6个月',
                'C6个月-1年',
                'D1-2年',
                'E 2年以上',
              ],
              width:'100%'
            },
            {
              name:'5、您的工作类型： ',
              answers:[
                'A．销售类',
                'B．支持辅助类',
                'C. 管理类',
               
              ],
              width:'33%'
            }
            
          ]
        },
        {
          name:'二、对工作本身的满意度',
          children:[
            {
              name:'1、您对本人的工作岗位是否感到满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            },
            {
              name:'2、您对您与工作的匹配程度是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            }
          ]
        },
        {
          name:'三、对工作回报与发展的满意度',
          children:[
            {
              name:'1、您对您的目前的薪资水平是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            },
            {
              name:'2、您对公司报酬、奖励的公平性是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            }
          ]
        },
        {
          name:'四、对领导管理的满意度',
          children:[
            {
              name:'1、您对公司高层领导管理者的管理能力与水平是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            },
            {
              name:'2、您对直接上级的管理能力与业务水平是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            }
          ]
        },
        {
          name:'五、对工作环境与背景的满意度',
          children:[
            {
              name:'1、您认为工作环境、设施设备的健康和安全预防措施是否足够且让人满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            },
            {
              name:'2、您对公司提供的工作中需要的资源(材料、设施、工具)是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            }
          ]
        },
        {
          name:'六、对工作关系的满意度',
          children:[
            {
              name:'1、您对同事之间的沟通与配合是否满意？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            },
            {
              name:'2、您对您和周围同事的工作责任感及主动性满意吗？',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            }
          ]
        },
        {
          name:'七、对企业整体的满意度',
          children:[
            {
              name:'1、您对公司的历史、公司文化是否满意',
              answers:[
                'A 很满意',
                'B 满意',
                'C 一般',
                'D 不满意',
                'E 极不满意',
               
              ],
              width:'20%'
            },
            {
              name:'2、您对公司目前还有哪些建议和意见：',
              answers:'',
              width:'100%'
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
.survey {
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  overflow: scroll;
  left: 0;
  background:#e4ce83 url('../assets/bg.jpg') no-repeat fixed top center;
  
}
.content {
  height: auto;
  background: #fff;
  width: 940px;
  margin: 68px auto 30px;
  text-align: left;
}
.inner {
  width: 780px;
  margin: 0 auto;
}
.content-header {
  padding: 40px 0 30px;
  
}

.title {
  font-size: 24px;
    font-weight: bold;
    color: #39a4db;
    position: relative;
    padding: 15px 0;
    text-align: center;
}
.title::after {
  position: absolute;
  right: 0;
  bottom: 0;
  content: '';
  width: 50px;
  height: 50px;
  background: url('../assets/icon.png') center no-repeat;
}
.header-tip {
      color: #555555;
    line-height: 24px;
    text-align: left;
    font-size: 16px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #ccc;
    margin-left: 0;
    margin-top: 20px;
}
.header-tip p {
  text-indent: 32px;
}
.ques {
  font-size: 16px;
}
.ques-title {
    padding: 2px 0;
    margin: 10px auto;
    line-height: 24px;
    color: #6a6a6a;
}
.sub-ques {
  padding: 6px 5px 32px 5px;
}
.sub-title {
    padding-top: 2px;
    font-size: 15px;
    color: #444444;
    font-weight: bold;
    height: auto;
    line-height: 20px;
    position: relative;
}
.sub-title::before {
  position: absolute;
  left: -15px;
  top: 5px;
  content: '*';
  color: red;
  line-height: 20px;
  font-size: 20px
}
.answers {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 5px;
  padding-left: 24px;
  padding-bottom: 2px;
  border-bottom: 1px solid #EFEFEF;
  font-size: 15px;
  color: #333333;
}
.answers textarea {
  margin-bottom: 20px;
}
.answers li {
  line-height: 30px;
  position: relative;
  margin-bottom: 12px;
}
.answers li input[type="radio"] {
  width: 18px;
  height: 16px;
  background: #fff;
  clip: rect(0, 0, 0, 0);
}
.answers li label {
  position: relative;
  padding: 5px 0;
}
.answers li input + label::before {
    position: absolute;
    content: '';
    font-size: 18px;
    width: 18px;
    height: 16px;
    background: #fff;
    background-image: url('../assets/radio.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    text-indent: .15em;
    line-height: 1; 
    left: -22px;
    top: 3px;
    pointer-events: none;
}
.answers li input[type="radio"]:checked + label::before {
  position: absolute;
    content: '';
    font-size: 18px;
    width: 18px;
    height: 16px;
    background: #fff;
    background-image: url('../assets/radio.png');
    background-position: 0 -16px;
    background-repeat: no-repeat;
    text-indent: .15em;
    line-height: 1; 
    left: -22px;
    top: 3px;
    pointer-events: none;
}
.submit {
  text-align: center;
  padding: 50px 0;
}
.submit button {
  background: #39a4db;
  padding: 5px 24px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.bottom {
  width: 100%;
  height: 50px;
  border-top: 1px solid #bbbbbb

}
</style>
