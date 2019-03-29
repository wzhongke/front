<style lang="less">
    @import "../../style/base";
    @import "../../style/header";
</style>

<template>
    <header>
        <nav role="navigation" class="navbar umis-navbar navbar-fixed-top">
            <div class="navbar-header">
                <a href="#" class="navbar-brand"><span>Umis</span></a>
            </div>
            <div class="navbar-toggle" v-on:click="slideBar">
                <i class="fa icon-align-justify"></i>
            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li class="dropdown navbar-super-fw hidden-xs">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">Mega Menu<b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="alert alert-warning alert-dismissable">
                                            <button type="button" data-dismiss="alert" aria-hidden="true" class="close">
                                                ×
                                            </button>
                                            <strong>Warning!</strong>Better check yourself, you're not looking too good.
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="0" class="dropdown-toggle"><i
                            class="fa glyphicon glyphicon-chevron-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#"><i class="fa fa-user"></i>&nbsp;My Profile</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-cogs"></i>&nbsp;Settings</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-sign-out"></i>&nbsp;Log Out</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#"><i class="fa fa-info"></i>&nbsp;Help</a>
                            </li>
                        </ul>
                    </li>
                    <!-- END EXTRA DROPDOWN-->
                </ul>
                <div class="nav-indicators">
                    <ul class="nav navbar-nav navbar-right nav-indicators-body">
                        <!-- BEGIN DROPDOWN NOTIFICATIONS-->
                        <li class="dropdown nav-notifications">
                            <!-- BEGIN DROPDOWN TOGGLE-->
                            <a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="0"
                               class="dropdown-toggle">
                                <span class="badge">9</span><i class="fa fa-warning fa-lg"></i>
                            </a>
                            <!-- END DROPDOWN TOGGLE-->
                            <!-- BEGIN DROPDOWN MENU-->
                            <ul class="dropdown-menu">
                                <!-- BEGIN DROPDOWN HEADER-->
                                <li class="nav-notifications-header">
                                    <a tabindex="-1" href="#">You have <strong>9</strong> new notifications</a>
                                </li>
                                <!-- END DROPDOWN HEADER-->
                                <!-- BEGIN NOTIFICATION ITEMS-->
                                <li class="nav-notifications-body">
                                    <a href="#" class="text-info"><i class="fa fa-user"></i>&nbsp;New User
                                        <small class="pull-right">Just Now</small>
                                    </a>
                                    <a href="#" class="text-danger"><i class="fa fa-user"></i>&nbsp;User Deleted
                                        <small class="pull-right">Just Now</small>
                                    </a>
                                    <a href="#" class="text-warning"><i class="fa fa-cogs"></i>&nbsp;Sever is overloaded
                                        <small class="pull-right">2 minutes ago</small>
                                    </a>
                                    <a href="#"><i class="fa fa-briefcase"></i>&nbsp;Backup is completed
                                        <small class="pull-right">4 minutes ago</small>
                                    </a>
                                    <a href="#" class="text-info"><i class="fa fa-user"></i>&nbsp;New User
                                        <small class="pull-right">Just Now</small>
                                    </a>
                                    <a href="#" class="text-danger"><i class="fa fa-user"></i>&nbsp;User Deleted
                                        <small class="pull-right">Just Now</small>
                                    </a>
                                    <a href="#" class="text-warning"><i class="fa fa-cogs"></i>&nbsp;Sever is overloaded
                                        <small class="pull-right">3 minutes ago</small>
                                    </a>
                                    <a href="#"><i class="fa fa-briefcase"></i>&nbsp;Backup is completed
                                        <small class="pull-right">6 minutes ago</small>
                                    </a>
                                </li>
                                <!-- END NOTIFICATION ITEMS-->
                                <!-- BEGIN DROPDOWN FOOTER-->
                                <li class="nav-notifications-footer">
                                    <a href="#">View all messages</a>
                                </li>
                                <!-- END DROPDOWN FOOTER-->
                            </ul>
                            <!-- END DROPDOWN MENU-->
                        </li>
                        <!-- END DROPDOWN NOTIFICATIONS-->
                        <!-- BEGIN DROPDOWN TASKS-->
                        <li class="dropdown nav-tasks">
                            <!-- BEGIN DROPDOWN TOGGLE-->
                            <a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="0"
                               class="dropdown-toggle">
                                <span class="badge">13</span><i class="fa fa-tasks fa-lg"></i>
                            </a>
                            <!-- END DROPDOWN TOGGLE-->
                            <!-- BEGIN DROPDOWN MENU-->
                            <ul class="dropdown-menu">
                                <!-- BEGIN DROPDOWN HEADER-->
                                <li class="nav-tasks-header">
                                    <a href="#">You have <strong>13</strong> tasks in progress</a>
                                </li>
                                <!-- END DROPDOWN HEADER-->
                                <!-- BEGIN DROPDOWN ITEMS-->
                                <li class="nav-tasks-body">
                                    <a>Prepare Report
                                        <span class="pull-right">30%</span>
                                        <div class="progress">
                                            <div role="progressbar" aria-valuenow="30" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 30%"
                                                 class="progress-bar progress-bar-danger">
                                                <span class="sr-only">30% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a>Make new update
                                        <span class="pull-right">40%</span>
                                        <div class="progress">
                                            <div role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 40%"
                                                 class="progress-bar progress-bar-info">
                                                <span class="sr-only">40% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a>Fix critical bugs
                                        <span class="pull-right">80%</span>
                                        <div class="progress progress-striped active">
                                            <div role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 80%" class="progress-bar">
                                                <span class="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a>Complete project
                                        <span class="pull-right">5%</span>
                                        <div class="progress">
                                            <div role="progressbar" aria-valuenow="5" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 5%"
                                                 class="progress-bar progress-bar-success">
                                                <span class="sr-only">5% Complete (success)</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a>Others
                                        <span class="pull-right">15%</span>
                                        <div class="progress">
                                            <div role="progressbar" aria-valuenow="15" aria-valuemin="0"
                                                 aria-valuemax="100" style="width: 15%"
                                                 class="progress-bar progress-bar-warning">
                                                <span class="sr-only">15% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- END DROPDOWN ITEMS-->
                                <!-- BEGIN DROPDOWN FOOTER-->
                                <li class="nav-tasks-footer">
                                    <a href="#">View all tasks</a>
                                </li>
                                <!-- END DROPDOWN FOOTER-->
                            </ul>
                            <!-- END DROPDOWN MENU-->
                        </li>
                        <!-- END DROPDOWN TASKS-->
                        <!-- BEGIN DROPDOWN MESSAGES-->
                        <li class="dropdown nav-messages">
                            <!-- BEGIN DROPDOWN TOGGLE-->
                            <a href="#" data-toggle="dropdown" data-hover="dropdown" data-delay="0"
                               class="dropdown-toggle">
                                <span class="badge">8</span><i class="fa fa-envelope fa-lg"></i>
                            </a>
                            <!-- END DROPDOWN TOGGLE-->
                            <!-- BEGIN DROPDOWN MENU-->
                            <ul class="dropdown-menu">
                                <!-- BEGIN DROPDOWN HEADER-->
                                <li class="nav-messages-header">
                                    <a tabindex="-1" href="#">You have <strong>8</strong> new messages</a>
                                </li>
                                <!-- END DROPDOWN HEADER-->
                                <!-- BEGIN DROPDOWN ITEMS-->
                                <li class="nav-messages-body">
                                    <a>
                                        <img src="" alt="User" class="avatar">
                                        <div class="title">
                                            <small class="pull-right">Just Now</small>
                                            <strong>Yadra Abels</strong>
                                        </div>
                                        <div class="message">Lorem ipsum dolor sit amet, consectetur...</div>
                                    </a>
                                    <a>
                                        <img src="" alt="User" class="avatar">
                                        <div class="title">
                                            <small class="pull-right">Just Now</small>
                                            <strong>Cesar Mendoza</strong>
                                        </div>
                                        <div class="message">Lorem ipsum dolor sit amet, consectetur...</div>
                                    </a>
                                    <a>
                                        <img src="" alt="User" class="avatar">
                                        <div class="title">
                                            <small class="pull-right">Just Now</small>
                                            <strong>John Doe</strong>
                                        </div>
                                        <div class="message">Lorem ipsum dolor sit amet, consectetur...</div>
                                    </a>
                                    <a>
                                        <img src="" alt="User" class="avatar">
                                        <div class="title">
                                            <small class="pull-right">Just Now</small>
                                            <strong>Tobei Tsumura</strong>
                                        </div>
                                        <div class="message">Lorem ipsum dolor sit amet, consectetur...</div>
                                    </a>
                                </li>
                                <!-- END DROPDOWN ITEMS-->
                                <!-- BEGIN DROPDOWN FOOTER-->
                                <li class="nav-messages-footer">
                                    <a tabindex="-1" href="#">View all messages</a>
                                </li>
                                <!-- END DROPDOWN FOOTER-->
                            </ul>
                            <!-- END DROPDOWN MENU-->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'umis-header',
        data () {
            return {
                isSlide: false
            }
        },
        methods: {
            search() {
                console.log("search")
            },
            slideBar () {
                $("body").toggleClass("reduced-sidebar");
            }
        },

    }
</script>

