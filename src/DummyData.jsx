import React from 'react'

const DummyData = () => {
    const BothData = () => {
        
    }

    const columns = [
        {
            name: 'Store',
            selector: row => row.store,
            sortable: true,
        },
        {
            name: 'Addresh',
            selector: row => row.addresh,
            sortable: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
            sortable: true,
        },
        {
          name: 'Status',
          selector: row => row.status,
          sortable: true,
      },
      
    {
      name: 'Alt Mobile',
      selector: row => row.altmobile,
      sortable: true,
    },
    
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    ];
    
    const datas = [
      {
          id: 1,
          store: 'Manyavar',
          addresh: 'Bangalore',
          mobile:'8792581670',
          status:'Accepted',
          altmobile:'8766554469',
          date:'12/02/2022',
      },
    
      {
        id: 2,
        store: 'Apple',
        addresh: 'Delhi',
        mobile:'55792581670',
        status:'Decline',
        altmobile:'1266554469',
        date:'12/02/2022',
    },
    {
      id: 3,
      store: 'Mi',
      addresh: 'Hydrabad',
      mobile:'8762581670',
      status:'Acceted',
      altmobile:'7886554469',
      date:'12/02/2022',
    },
    {
      id: 4,
      store: 'Samsung',
      addresh: 'Bangalore',
      mobile:'9992581670',
      status:'Declined',
      altmobile:'87876554469',
      date:'12/02/2022',
    },
    {
      id: 5,
      store: 'Manyavar',
      addresh: 'Delhi',
      mobile:'8792581670',
      status:'Accepted',
      altmobile:'8766554469',
      date:'12/02/2022',
    },
    
    {
    id: 6,
    store: 'Mac',
    addresh: 'Delhi',
    mobile:'55792581670',
    status:'Decline',
    altmobile:'1266554469',
    date:'12/02/2022',
    },
    {
    id: 7,
    store: 'vivo',
    addresh: 'Hydrabad',
    mobile:'8762581670',
    status:'Acceted',
    altmobile:'7886554469',
    date:'12/02/2022',
    },
    {
    id: 8,
    store: 'Metrola',
    addresh: 'Bangalore',
    mobile:'9992581670',
    status:'Pending',
    altmobile:'87876554469',
    date:'12/02/2022',
    },
    
    {
      id: 9,
      store: 'Orian',
      addresh: 'Hydyrabad',
      mobile:'8792581670',
      status:'Hold',
      altmobile:'8766554469',
      date:'12/02/2022',
    },
    
    {
    id: 10,
    store: 'Redmi',
    addresh: 'Bangalore',
    mobile:'55792581670',
    status:'Accepted',
    altmobile:'1266554469',
    date:'12/02/2022',
    },
    {
    id: 11,
    store: 'Mi',
    addresh: 'Hydrabad',
    mobile:'8762581670',
    status:'Acceted',
    altmobile:'7886554469',
    date:'12/02/2022',
    },
    {
    id: 12,
    store: 'Samsung',
    addresh: 'Bangalore',
    mobile:'9992581670',
    status:'Declined',
    altmobile:'87876554469',
    date:'12/02/2022',
    },
      
    ]

  return (
    <>
    <BothData columns={columns} datas ={datas} />
    
    </>
  )
}

export default DummyData