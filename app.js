
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		width:500,
		height:500,
		title:'grid panel',
		renderTo:Ext.getBody(),
		layout:'fit',
		items:[{
			xtype:'grid',
			listeners:{
				cellclick:function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
					console.log(record.get('column3'));
				}
			},
			columns:[{
				text:'a',
				dataIndex:'column1',
				flex:1
			},{
				text:'b',
				dataIndex:'column2',
				flex:1,
				renderer:function(value){
					return value + 'hi';
				}
			},{
				text:'c',
				dataIndex:'column3',
				flex:1
			}],
			listeners:{
				boxready:function(obj){
					Ext.Ajax.request({
						url: '/data/grid.json',
						method:'POST',
						params:{
							
						},
						success:function(response){
							var result = Ext.decode(response.responseText);
							var store = obj.getStore();
							console.log('success',result);
							store.loadData(result.data);
						},
						failure:function(response){
							console.log('fail', response.status);
						}
					});
				}
			},
			store:{
				field:['column1','column2','column3'],
				data : []
			}
		}]
	})
})