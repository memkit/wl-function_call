


import * as React from 'react'
import { usePrepareContractWrite } from 'wagmi'

abi = require("../../nft_abi.json")


export function MintNFTForm() {
 const [tokenId, setTokenId] = React.useState('')

 const { config } = usePrepareContractWrite({
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 abi:abi,
 functionName: 'function_name',
 args: [parseInt(tokenId)],
 enabled: Boolean(tokenId),
 })

 return (
 <form>
 <label for="tokenId">Token ID</label>
 <input
 id="tokenId"
 onChange={(e) => setTokenId(e.target.value)}
 placeholder="420"
 value={tokenId}
 />
 <button>Mint</button>
 </form>
 )
}
