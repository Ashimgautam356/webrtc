import React, { useMemo } from 'react'


const PeerContext =  React.createContext(null)

export const usePeer = ()=> React.useContext(PeerContext)



const createOffer = async ()=>{
    const offer =  await peer.createOffer();
    await peer.setLocalDescription(offer)
    return offer
}


export const PeerProvider = (props)=>{
    const peer = useMemo(()=> new RTCPeerConnection(), []);
    return (<PeerContext.Provider value={{peer,createOffer}}>{props.children}</PeerContext.Provider>)
}