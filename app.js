
Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		title : 'ExtJS Example',
		renderTo  : Ext.getBody(),
		border : true,
		layout : 'border',
		items :[{
			xtype : 'panel',
			border : true,
			flex : 1,
			region : 'west'		
		},{
			xtype : 'panel',
			border : true,
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				border : true,
				flex : 2,
				region : 'center'		
			},{
				xtype : 'panel',
				border : true,
				flex  : 1,
				region : 'south'
			}]
		}]
	})
})