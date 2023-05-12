export default {
    name:'events',
    title:'Events',
    type:'document',
    fields:[
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options:{
                dateFormat: 'YYYY-MM-DD',
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of:[{
                type:'image',
                options:{
                    hotspot: true
                }
            }]
        },
        {
            name: 'videos',
            title: 'Videos',
            type: 'array',
            of:[{type:'url'}]
        }
    ]
}