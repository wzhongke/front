<style>
    .rc-handle-container {
        position: relative;
    }
    .rc-handle {
        position: absolute;
        width: 7px;
        cursor: ew-resize;
        margin-left: -3px;
        z-index: 2;
    }
    table.rc-table-resizing {
        cursor: ew-resize;
    }
    table.rc-table-resizing thead,
    table.rc-table-resizing thead > th,
    table.rc-table-resizing thead > th > a {
        cursor: ew-resize;
    }

    table {
        table-layout: fixed;
    }

    td, th, td div{
        width: 100%;
        text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
    }
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Data Tables</h3>
                    </div>
                    <div class="panel-body">
                        <div id="datatable1_wrapper" class="dataTables_wrapper form-inline" role="grid">
                            <table id="demo-table" data-resizable-columns-id="demo-table"
                                   class="table table-striped table-bordered table-hover table-responsive dataTable"
                                   aria-describedby="datatable1_info">
                                <thead>
                                <tr role="row">
                                    <th>Browser
                                    </th>
                                    <th>
                                        Rendering engine
                                    </th>
                                    <th>Platform(s)
                                    </th>
                                    <th >Engine version
                                    </th>
                                    <th >CSS grade
                                    </th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th>Browser</th>
                                    <th>Rendering engine</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                </tr>
                                </tfoot>
                                <tbody>
                                <tr id="row_55" class="odd">
                                    <td class="">IE Mobile</td>
                                    <td class="">Misc</td>
                                    <td class=" sorting_1">Windows Mobile 6</td>
                                    <td class="center"></td>
                                    <td class="center">C</td>
                                </tr>
                                <tr id="row_5" class="even">
                                    <td class="">
                                        <div>
                                        Internet Explorer Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 7Internet Explorer 77
                                        </div>
                                    </td>
                                    <td class="">Trident</td>
                                    <td class=" sorting_1">Win XP SP2+</td>
                                    <td class="center">7</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_6" class="odd">
                                    <td class="">AOL browser (AOL desktop)</td>
                                    <td class="">Trident</td>
                                    <td class=" sorting_1">Win XP</td>
                                    <td class="center">6</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_14" class="even">
                                    <td class="">Netscape Browser 8</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98SE+</td>
                                    <td class="center">1.7</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_7" class="odd">
                                    <td class="">Firefox 1.0</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98+ / OSX.2+</td>
                                    <td class="center">1.7</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_8" class="even">
                                    <td class="">Firefox 1.5</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98+ / OSX.2+</td>
                                    <td class="center">1.8</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_9" class="odd">
                                    <td class="">Firefox 2.0</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98+ / OSX.2+</td>
                                    <td class="center">1.8</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_15" class="even">
                                    <td class="">Netscape Navigator 9</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98+ / OSX.2+</td>
                                    <td class="center">1.8</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_25" class="odd">
                                    <td class="">Seamonkey 1.1</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98+ / OSX.2+</td>
                                    <td class="center">1.8</td>
                                    <td class="center">A</td>
                                </tr>
                                <tr id="row_23" class="even">
                                    <td class="">Mozilla 1.7</td>
                                    <td class="">Gecko</td>
                                    <td class=" sorting_1">Win 98+ / OSX.1+</td>
                                    <td class="center">1.7</td>
                                    <td class="center">A</td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="dataTables_info" id="datatable1_info">Showing 1 to 10 of 57 entries
                                    </div>
                                </div>
                                <div class="col-xs-6">
                                    <div class="dataTables_paginate paging_bootstrap">
                                        <ul class="pagination" style="margin: 0">
                                            <li class="prev disabled"><a href="#">← Previous</a></li>
                                            <li class="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li class="next"><a href="#">Next → </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'umis-table'
    }
    $(function() {
        $("table").resizableColumns()
    });

</script>
