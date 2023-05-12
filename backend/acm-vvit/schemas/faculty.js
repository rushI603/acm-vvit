export default {
    name:'faculty',
    title: 'Faculty',
    type: 'document',
    fields:[
        {
            name: 'id',
            title: 'Id',
            type: 'string'
        },
        {
            name: 'collegeId',
            title:'CollegeId',
            type:'string'
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
            name: 'experience',
            title: 'Experience',
            type: 'number'
        }

]
}