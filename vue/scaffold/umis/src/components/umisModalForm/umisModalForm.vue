<template>
        <div class="row">
            <div class="col-md-12">
                <form role="form" class="form-horizontal" action="/index" method="post">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="form-input" class="col-sm-2 control-label">Input</label>
                            <div class="col-sm-10">
                                <input id="form-input" type="text" placeholder="Input" class="form-control">
                                <span class="help-block">Supporting Help Text</span>
                            </div>
                        </div>
                        <umis-checkbox></umis-checkbox>
                        <umis-radiobox></umis-radiobox>
                        <umis-multiple-select></umis-multiple-select>
                        <div class="form-group">
                            <label for="form-disabledInput" class="col-sm-2 control-label">Disabled</label>
                            <div class="col-sm-10">
                                <input id="form-disabledInput" type="text" placeholder="Disabled input here..." disabled="disabled" class="form-control">
                                <span class="help-block">Supporting Help Text</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="form-input-popover" class="col-sm-2 control-label">Input with Popover</label>
                            <div class="col-sm-10">
                                <input id="form-input-popover" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="form-input-tooltip" class="col-sm-2 control-label">Input with Tooltip</label>
                            <div class="col-sm-10">
                                <input id="form-input-tooltip" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="form-autoComplete" class="col-sm-2 control-label">Auto Complete</label>
                            <div class="col-sm-10">
                                <input id="form-autoComplete" type="text" class="form-control">
                                <span class="help-block">Start typing to auto complete!. E.g: California</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="form-input-email" class="col-sm-2 control-label">Email</label>
                            <div class="col-sm-10">
                                <div class="input-group">
                      <span class="input-group-addon"><i class="icon-envelope"></i>
                      </span>
                                    <input id="form-input-email" type="text" placeholder="Email address" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="form-input-currency" class="col-sm-2 control-label">Currency</label>
                            <div class="col-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon">$</span>
                                    <input id="form-input-currency" type="text" class="form-control">
                                    <span class="input-group-addon">.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label"></label>
                            <div class="col-sm-10">
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <span class="input-group-btn">
                        <button type="button" class="btn">Go!</button>
                      </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label"></label>
                            <div class="col-sm-10">
                                <div class="input-group">
                                    <input type="text" class="form-control">
                                    <span class="input-group-btn">
                        <button type="button" class="btn">Search</button>
                        <button type="button" class="btn">Options</button>
                      </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label"></label>
                            <div class="col-sm-10">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button type="button" data-toggle="dropdown" class="btn dropdown-toggle">Google
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="#">Yahoo</a>
                                            </li>
                                            <li>
                                                <a href="#">Bing</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- btn-group-->
                                    <input type="text" class="form-control">
                                    <span class="input-group-btn">
                                    <button type="button" class="btn"><i class="fa fa-search"></i>
                                    </button>
                                  </span>
                                </div>
                            </div>
                        </div>
                </div>
                    <div class="modal-footer">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="reset" class="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</template>
<script>
    import umisMultipleSelect from '../umisMultipleSelect'
    import umisCheckbox from '../umisCheckbox'
    import umisRadiobox from "../umisRadioBox/umisRadioBox.vue";
    export default {
        name: 'umis-modal-form',
        components: {
            umisRadiobox,
            umisCheckbox, umisMultipleSelect}
    }
</script>
