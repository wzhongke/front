<style lang="less">
    @import "../../style/main";
    .modal-dialog {width:60%;}
</style>
<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="page-title">{{pageTitle}}</h3>
                    <ul class="breadcrumb breadcrumb-arrows breadcrumb-default">
                        <li>
                            <a href="#ignore"><i class="icon-home icon-lg"></i>
                            </a>
                        </li>
                        <!--<li>-->
                            <!--<a href="#ignore">Tables</a>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a href="#ignore">Basic Tables</a>-->
                        <!--</li>-->
                    </ul>
                </div>
            </div>
        </div>

        <!--<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" style="margin-left: 100px;">add</button>-->

        <!-- 模态框 -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Add</h4>
                    </div>

                    <umis-modal-form></umis-modal-form>
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>

    import VueRouter from 'vue-router'
    import umisForm from '../umisForm'
    import umisTable from '../umisTable'
    import umisModalForm from '../umisModalForm'

    export default {
        components: {umisModalForm},
        name: 'umis-main',
        data () {
            return {
                pageTitle: 'umis table'
            }
        }
    }
</script>
