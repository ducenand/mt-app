<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团">
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"/></button>
          <dl
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item,idx) in hotPlace"
              :key="idx">
              <a :href="'/products?keyword=' + encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item,idx) in searchList"
              :key="idx">
              <a :href="'/products?keyword=' + encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in suggest"
            :key="idx"
            :href="'/products?keyword' + encodeURIComponent(item.name)">{{ item.name }}</a>
          <a href="">北京世界公园</a>
          <a href="">小吃街</a>
          <a href="">小吃街</a>
          <a href="">小吃街</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link
              to="/"
              class="takeout">美团外卖
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="movie">猫眼电影
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel">美团酒店
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="apartment">名宿/公寓
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business">商家入驻
            </nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"/>
            <p class="txt">随时退</p>
          </li>
          <li><i class="single"/>
            <p class="txt">不满意免单</p>
          </li>
          <li><i class="overdue"/>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        search: '',
        isFocus: false,
        suggest: [
          {
            name: "北京欢乐谷"
          },
          {
            name: "故宫博物院"
          },
          {
            name: "北京野生动物园"
          },
          {
            name: "八达岭长城"
          },
          {
            name: "北京世界公园颐和园"
          }
        ],
        hotPlace: [
          {
            name: "北京欢乐谷"
          },
          {
            name: "故宫博物院"
          },
          {
            name: "北京野生动物园"
          },
          {
            name: "八达岭长城"
          },
          {
            name: "北京世界公园颐和园"
          }
        ],
        searchList: [
          {
            name: "大闸蟹"
          },
          {
            name: "麻辣小龙虾"
          },
          {
            name: "冬枣"
          },
          {
            name: "火锅"
          },
        ]
      }
    },
    computed: {
      isHotPlace() {
        return this.isFocus && !this.search
      },
      isSearchList() {
        return this.isFocus && this.search
      }
    },
    methods: {
      focus() {
        this.isFocus = true
      },
      blur() {
        setTimeout(()=>{
          this.isFocus = false
        },200)
      },
      input() {

      }
    }
  }
</script>
