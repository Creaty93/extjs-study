
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
			store:{
				field:['column1','column2','column3'],
				proxy:{
					type:'ajax',
					url:'/data/grid.json',
					reader:{
						type:'json',
						rootProperty:'data'
					}
				},
				autoLoad:true
			},			
			tbar:[{
				xtype:'button',
				text:'추가',
				listeners:{
					click:function(btn){
						alert('btn click');
					}
				}
			},{
				xtype:'combo',
				queryMode:'local',
				displayField:'key',
				valueField:'value',
				store:{
					field:['key','value'],
					data:[{
						key:'선택1',
						value:'값1'
					},{
						key:'선택2',
						value:'값2'
					},{
						key:'선택3',
						value:'값3'
					}]
				},
				listeners:{
					change:function(obj, newValue, oldValue, eOpts){
						alert(newValue+','+ oldValue);
					}
				}
			}]
		}]
	})
})