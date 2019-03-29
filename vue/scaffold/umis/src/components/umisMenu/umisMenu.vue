<template>
    <div :class="classes[level]" :style="{display: display}">
        <ul>
            <li v-for="(item, childDivIndex) in menu" :class="{active: item.isActive}" @click.stop="showChildren($event, childDivIndex, level)"
                @mouseleave="hideChildren()">
                <a v-if="item.children" href="javascript:void(0)">
                    <i class="fa" :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                    <i class="fa arrow icon-chevron-right"></i>
                </a>
                <a v-else :href="'#/' + item.table">
                    <i class="fa" :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                </a>
                <umis-menu v-if="item.children" :menu="item.children" :level="level+1" :display="item.display"></umis-menu>
            </li>
        </ul>
    </div>
</template>
<script>
    function log(message) {
        console.log(message);
    }
    let windowHeight = $(".umis-sidebar").height();
    export default {
        name: 'umis-menu',
        data () {
            return {
                classes: ['menu-content', 'second-level', 'third-level']
            }
        },
        props: {
            menu: Array,
            level: Number,
            display: String
        },
        methods: {
            showChildren (event, showIndex) {
                if (windowHeight === undefined) {
                    windowHeight = $(".umis-sidebar").height();
                }
                // 高度计算offset获取，可能会有问题，有待修正
                let offset = $(event.target).parent("li").offset();
                if (offset !== undefined ) {
                    let childHeight = this.menu[showIndex].children.length * 39;
                    let top = 39;
                    if (windowHeight < childHeight) childHeight = childHeight / 2;
                    if (windowHeight > childHeight) {
                        if (windowHeight - offset.top > childHeight / 2) {
                            log("windowHeight - offset.top > childHeight / 2")
                            top = offset.top - Math.floor(childHeight / 2);
                        } else {
                            log("else")
                            top = offset.top - (windowHeight - childHeight);
                        }
                        top = top < 39 ? 39 : top;
                    }
                    $(event.target).siblings("div").css("top", top + "px")
                }

                this.menu.forEach((item, index) => {
                    if (index !== showIndex) {
                        item.display = 'none';
                        item.isActive = false;
                    } else {
                        item.display = 'block';
                        item.isActive = true;
                    }
                })
            },
            hideChildren() {
                this.menu.forEach((item, index) => {
                    item.display = 'none';
                    item.isActive = false;
                })
            }

        },
        computed: {

        }
    }
</script>
