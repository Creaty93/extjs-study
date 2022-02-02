Ext.define('study.view.AjaxSample', {
    extend: 'Ext.grid.Panel',
    xtype: 'ajaxsample',
    title:'Ajax Sample',
    
    controller:'ajaxsample',
    viewModel:'ajaxsample',
    
    tbar:[{
		xtype:'button',
		text:'데이터 로드',
	    handler:'dataLoadClick'
	}],
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
	bind:{
		store:'{gridStore}'
	},
	listeners:{
		rowClick:'rowClick'
	}
});
