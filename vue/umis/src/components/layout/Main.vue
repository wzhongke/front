<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 15%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  /* height: 100%; */
  margin-left: 10px;
  /* width: 300%; */
}
.menu-wrap {
  width: auto;
  /* overflow-x: scroll; */
}
.drawer-two {
  left: 240px !important;
}
</style>

<template>
    <div class="layout">
        <Layout>
            <Header>
                <div class="layout-logo"></div>
                <div class="menu-wrap">
                <Menu mode="horizontal" theme="dark" active-name="1" @on-select="value5=true">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            权限管理
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            网页
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            无线
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            App
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="ios-paper"></Icon>
                            工信部
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="ios-paper"></Icon>
                            国信办
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="ios-paper"></Icon>
                            工信部
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="ios-paper"></Icon>
                            国信办
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="ios-paper"></Icon>
                            工信部
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="ios-paper"></Icon>
                            国信办
                        </MenuItem>
                    </div>
                </Menu>
                </div>
            </Header>
            <Layout>
                <Drawer class-name="menu-draw" title="Multi-level drawer" placement="left" width="200" :closable="false" v-model="value5" :inner="true">
                     <Scroll>
                        <Menu active-name="1" @on-select="select" width="100">
                            <MenuItem name="1">
                                <router-link to='/content'>权限管理</router-link>
                            </MenuItem>
                            <MenuItem name="2">
                                网页
                            </MenuItem>
                            <MenuItem name="3">
                                无线
                            </MenuItem>
                            <MenuItem name="4">
                                App
                            </MenuItem>
                            <MenuItem name="5">
                                工信部
                            </MenuItem>
                            <MenuItem name="6">
                                国信办
                            </MenuItem>
                        </Menu>
                    </Scroll>
                    <Button @click="value6 = true" type="primary">Two-level Drawer</Button>
                </Drawer>
                <Drawer title="Two-level drawer" :class-name="'drawer-two'" placement="left" width="480" :closable="false" v-model="value6" :inner="true">
                    This is two-level drawer.
                </Drawer>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}" separator=">">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value5: false,
      value6: false,
      loading: false,
    };
  },
  methods: {
    select() {
      this.value5 = false;
    },
  }
};
</script>

