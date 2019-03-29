<style>
    .chosen-container {
        width:100%;}
</style>
<template>
    <div class="form-group">
            <label for="multi-select" class="col-sm-2 control-label">{{name}}</label>
            <div class="col-sm-10">
                <select data-placeholder="Choose a Country" class="chosen-select" multiple tabindex="4" id="multi-select">
                    <option v-for="item in options" :value="item.value" :select="item.select">{{item.name}}</option>
                </select>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'umis-multiple-select',
        data () {
            return {

            }
        },
        props: ['options', 'name']
    }
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
</script>
