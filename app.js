
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		width:500,
		height:500,
		title:'data store',
		renderTo:Ext.getBody(),
		items:[{
			xtype:'combo',
			editable:false,
			value:'second',
			displayField: 'test1',
			valueField:'test2',
			store:{
				fields:['test1', 'test2'],
				data:[{
					test1 : '처음',
					test2 : 'first'
				},{
					test1 : '둘째',
					test2 : 'second'
				},{
					test1 : '셋째',
					test2 : 'third'
				}]
			}
		}]
	})
})