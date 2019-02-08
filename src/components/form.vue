<template>
  <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="First name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="Last name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="Email">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="Claim Request Content">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
   <el-form-item label=" ">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="I agree" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Submit</el-button>
  </el-popover>
  
</el-form>

</template>

<script src="./form.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./form.css" scoped></style>
