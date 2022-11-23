<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody v-if="listType == true">
        <tr :key='i' v-for="(product, i) in productList">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
      <tbody v-if="listType != true">
        <tr :key='i' v-for="(product, i) in productList1">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
       <tbody v-show="listType">
        <tr :key='i' v-for="(product, i) in productList1">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="listTypeChange">listTypeChange</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      productList: [
        { product_name: '기계식키보드', price: '25,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '무선마우스', price: '12,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '아이패드', price: '725,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '테이블거치대', price: '10,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '무선충전기', price: '25,000', category: '노트북/태블릿', delivery_price: '5,000' }
      ],
      productList1: [
        { product_name: '기계식키보드', price: '300,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '무선마우스', price: '300,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '아이패드', price: '1,000,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '테이블거치대', price: '10,000', category: '노트북/태블릿', delivery_price: '5,000' },
        { product_name: '무선충전기', price: '25,000', category: '노트북/태블릿', delivery_price: '5,000' }
      ],
      listType: false
    }
  },
  methods: {
    listTypeChange () {
      this.listType = !this.listType
    }
  }
}
</script>
<style scoped>
  table{
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid gray;
    text-align: left;
    padding: 8px;
  }
</style>
