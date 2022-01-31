
Ext.onReady(function(){
	Ext.create('Ext.grid.Panel',{
		width:500,
		height:500,
		title:'data store',
		renderTo:Ext.getBody(),
		columns:[{
			text :'c1',
			flex:1,
			align:'center',
			dataIndex:'c1'
		},{
			text:'c2',
			flex:1,
			align:'left',
			dataIndex:'c2'
		},{
			text:'c3',
			flex:1,
			align:'right',
			dataIndex:'c3'
		}],
		store:{
			fields:['c1','c2','c3'],
			data:[{
				c1:'row1c1',
				c2:'row1c2',
				c3:'row1c3'
			},{
				c1:'row2c1',
				c2:'row2c2',
				c3:'row2c3'
			}]
		}
	})
})