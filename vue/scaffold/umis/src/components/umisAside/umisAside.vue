<style lang="less">
    @import "../../style/aside";
</style>
<template>
    <aside class="umis-sidebar">
        <div class="" style="position: relative;width: auto;height: 770px;">
            <div class="umis-sidebar-content" style=" width: auto; height: 770px;">
            <!-- BEGIN USER SECTION-->
            <div class="user">
                <!-- //Notice .avatar class-->
                <!--<img width="25" height="25" src="" alt="Julio Marquez" class="avatar">-->
                <i class="avatar glyphicon glyphicon-user"></i>
                <span>{{userName}}</span>
                <!-- BEGIN USER SETTINGS SECTION--><i data-toggle="dropdown" class="trigger-user-settings fa glyphicon glyphicon-user" aria-expanded="false"></i>
                <div class="user-settings">
                    <!-- BEGIN USER SETTINGS TITLE-->
                    <h3 class="user-settings-title">Settings shortcuts</h3>
                    <!-- END USER SETTINGS TITLE-->
                    <!-- BEGIN USER SETTINGS CONTENT-->
                    <div class="user-settings-content">
                        <a href="#my-profile">
                            <!-- //Notice .icon class-->
                            <div class="icon"><i class=" glyphicon glyphicon-user"></i>
                            </div>
                            <!-- //Notice .title class-->
                            <div class="title">My Profile</div>
                            <!-- //Notice .content class-->
                            <div class="content">View your profile</div>
                        </a>
                        <a href="#view-messages">
                            <!-- //Notice .icon class-->
                            <div class="icon"><i class="fa fa-envelope-o"></i>
                            </div>
                            <!-- //Notice .title class-->
                            <div class="title">View Messages</div>
                            <!-- //Notice .content class-->
                            <div class="content">
                                You have <strong>17</strong>
                                new messages
                            </div>
                        </a>
                        <a href="#view-pending-tasks">
                            <!-- //Notice .icon class-->
                            <div class="icon"><i class="fa fa-tasks"></i>
                            </div>
                            <!-- //Notice .title class-->
                            <div class="title">View Tasks</div>
                            <!-- //Notice .content class-->
                            <div class="content">You have <strong>8</strong> pending tasks</div>
                        </a>
                    </div>
                    <!-- END USER SETTINGS CONTENT-->
                    <!-- BEGIN USER SETTINGS FOOTER-->
                    <div class="user-settings-footer">
                        <a href="#more-settings">See more settings</a>
                    </div>
                    <!-- END USER SETTINGS FOOTER-->
                </div>
            </div>
            <!-- END USER SETTINGS SECTION-->
            <!-- EDN USER SECTION-->
            <!-- BEGIN SEARCH SECTION-->
            <div class="search-sidebar">
                <form class="search-sidebar-form has-icon">
                    <label for="sidebar-query" class="arrow icon-search"></label>
                    <input id="sidebar-query" type="search" placeholder="Search" class="search-query" v-model="searchText" @focus="isSearch = true" @blur=" isSearch = false" >
                    <div :class="{ hidden: !isSearch }" class="suggestion menu-content">
                        <ul v-if="searchResult">
                            <li v-for="result in searchResult" v-bind:key="result.searchText">{{result}}</li>
                        </ul>
                        <ul v-else>
                            <li class="search-noresult">no result match: {{searchText}}</li>
                        </ul>
                    </div>
                </form>
            </div>
            <div class="clearfix"></div>
            <!-- END SEARCH SECTION-->
            <!-- BEGIN MENU SECTION-->
            <div class="menu">
               <umis-menu :menu="menu" :level="0" :divIndex="0"></umis-menu>
            </div>
            <!-- END MENU SECTION-->
        </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 770px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
    </aside>
</template>
<script>
    import UmisMenu from "../umisMenu/umisMenu.vue";

    let menu = [];

    for (let i=0; i< 10; i++) {
        let childFirst = [];
        for (let j=0, up =Math.floor((Math.random() * 20) + 1); j<up; j++) {
            let childSecond = [];
            for (let k=0; k< Math.floor((Math.random() * 20) + 1); k++) {
                childSecond.push({
                    name: 'third-level' + k,
                    table: 'third-' + k
                });
            }
            childFirst.push({
                name: 'second-level-' + j,
                children: childSecond,
                display:'none'
            });
        }
        menu.push({
            name: 'first-level-' + i,
            children: childFirst,
            icon: 'icon-laptop',
            display:'none'
        })

    }

    export default {
        components: {UmisMenu},
        name: "umis-aside",
        data () {
            return {
                userName: 'wangzhongke',
                isSearch: false,
                searchText: '',
                menu: menu
            }
        },
        computed: {
            searchResult: function () {
                let result = this.$store.state.items.filter(item => item.search(this.searchText) >= 0).slice(0, 5)
                return result.length < 1 ? null : result;
            }
        }
    }
</script>
