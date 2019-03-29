<style lang="less">
    @import "../../style/store";
</style>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 store">
                <div class="store-border">
                    <h3>自定义<i :class="{'icon-edit': !isSave,  'icon-save': isSave}" @click="saveClick($event)"></i>
                        <i class="glyphicon-plus" data-toggle="modal" data-target="#index_storage_add"></i>
                    </h3>
                    <ul id="sortable1">
                        <li :class="{shadow: isSave}" v-for="item in storeData.selfConfig">
                            <i :class="{'icon-move': true, 'hidden' : !isSave}"></i>
                            <a :href="item.href" :style="{width: isSave ? '50%': '100%'}">{{ item.name }}</a>
                            <i :class="{'icon-plus-sign': true, 'hidden' : !isSave, 'store-remove': true}"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 store">
                <div class="store-border">
                    <h3>自定义</h3>
                    <ul id="sortable2">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 store">
                <div class="store-border">
                    <h3>自定义</h3>
                    <ul id="sortable3">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" id="index_storage_add">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">增加表</h4>
                    </div>
                    <div class="modal-body" style="min-height: 100px;">
                        <umis-multiple-select :options="options" :name="'选择表'"></umis-multiple-select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addTable()" data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import UmisMultipleSelect from "../umisMultipleSelect/umisMultipleSelect.vue";

    export default {
        components: {UmisMultipleSelect},
        name: 'umis-store',
        data () {
            return {
                isSave: false,
                options: [
                ]
            }
        },
        methods: {
            saveClick(event) {
                this.isSave = !this.isSave;
            },
            addTable() {
                if (!this.$store.getters.getStorageSupport) {
                    alert ("do not support localStorage");
                    return;
                }
                let storeData = this.$store.getters.getIndexStorage;
                let selfConfig = storeData.selfConfig || [],
                    $selected = $("#index_storage_add").find(".chosen-choices>li.search-choice>span");
                if ($selected.length + selfConfig.length > 10) {
                    selfConfig = selfConfig.slice(10 - $selected.length, $selected.length + selfConfig.length - 10)
                }
                $selected.each((index, item) => {
                    selfConfig.unshift({name:item.innerHTML, href: '/#' + item.innerHTML});
                });
                this.$store.commit("changeSelfIndexStorage", {selfConfig: selfConfig});
            }
        },
        computed: {
            storeData () {
                let storeData = this.$store.getters.getIndexStorage;
                let tables = this.$store.getters.getTables;
                if (storeData === undefined) {
                    return "do not support localStorage"
                }
                if (storeData === null) {
                    storeData = {
                        selfConfig: [],
                        mostUsed:[],
                        lastedUsed: []
                    }
                } else if (storeData.selfConfig) {
                    for (let i=0, len=tables.length; i<len; i++) {
                        if (storeData.selfConfig.indexOf(tables[i]) < 0) {
                            this.options.push(tables[i]);
                        }
                    }
                } else {
                    this.options = tables;
                }
                return storeData;
            }
        }
    }
    $( function() {
        $( "#sortable1" ).sortable();
        $( "#sortable1" ).disableSelection();
    } );
</script>
