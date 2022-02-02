Ext.define('study.view.GridSample', {
    extend: 'Ext.grid.Panel',
    xtype: 'gridsample',
    title:'Grid Sample',
    
    controller:'gridsample',
    viewModel:'gridsample',
    
	columns:[{
		text:'컬럼1',
		flex:1,
		dataIndex:'column1'
	},{
		text:'컬럼2',
		flex:1,
		dataIndex:'column2'
	},{
		text:'컬럼3',
		flex:1,
		dataIndex:'column3'
	}],
	autoLoad:true,
	bind:{
		store:'{gridStore}'
	},
	listeners:{
		rowClick:'rowClick'
	}
});
