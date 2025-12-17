import { useState } from 'react';

export default function useRiver() {
    
    const [other, setOther] = useState("santa2022");
    const [refresh, setRefresh] = useState(true);

    return {
        otherUserName: other,
        setOther: setOther,
        refresh: refresh,
        setRefresh: setRefresh
    }
}