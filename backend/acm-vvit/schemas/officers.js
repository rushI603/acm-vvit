export default {
    name:'officers',
    title: 'Officers',
    type: 'document',
    fields:[
        {
            name: 'id',
            title: 'Id',
            type: 'string'
        },
        {
            name: 'collegeId',
            title: 'CollegeId',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true
            }
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'validity',
            title: 'Validity',
            type: 'date',
            options:{
                dateFormat: 'YYYY-MM-DD',
            }

        }
    ]
}