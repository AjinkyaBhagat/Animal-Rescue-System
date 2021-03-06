import React, { useEffect, useState } from 'react'
import Scroll from '../Scroll/Scroll'
import SearchBarRR from './SearchBarRR/SearchBarRR'
import ViewRescueRequest from './ViewRescueRequest'

function RescueRequestCont() {


    const [rrs, setRRS] = useState([]);
    const [rrssearchfield, setrrssearchfield] = useState('');

    useEffect(() => {

        fetch('http://localhost:3002/requests', {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then(response => response.json())
            .then(rrs => { setRRS(rrs) });


    }
        , [])


    const filteredRRS = rrs.filter(rr => {
        return rr.ra_loc.toLowerCase().includes(rrssearchfield.toLowerCase());
    })


    return (
        <>
            <SearchBarRR setrrssearchfield={setrrssearchfield} />
            <Scroll>
                <ViewRescueRequest rrs={filteredRRS} />
            </Scroll>
        </>
    )
}

export default RescueRequestCont;