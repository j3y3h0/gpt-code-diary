최근 "액션스퀘어 장현국 '블록체인 게임 플랫폼 기업으로 대전환'"이라는 뉴스에 기반하여, 블록체인 게임 플랫폼에서의 간단한 NFT(Non-Fungible Token) 생성 예제를 작성해 보겠다. 이를 위해 Python의 `web3` 라이브러리를 사용하여 이더리움 블록체인에서 NFT를 발행하는 코드를 제공하겠다.

### NFT 생성 예제 코드

```python
from web3 import Web3
import json

# 이더리움 노드에 연결
infura_url = 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
web3 = Web3(Web3.HTTPProvider(infura_url))

# 계정 정보
my_address = 'YOUR_WALLET_ADDRESS'
private_key = 'YOUR_PRIVATE_KEY'

# NFT 컨트랙트 ABI와 주소
contract_address = 'NFT_CONTRACT_ADDRESS'
with open('nft_abi.json') as f:
    contract_abi = json.load(f)

# NFT 컨트랙트 인스턴스 생성
nft_contract = web3.eth.contract(address=contract_address, abi=contract_abi)

# NFT 발행 함수
def mint_nft(to_address, token_id, token_uri):
    nonce = web3.eth.getTransactionCount(my_address)
    txn = nft_contract.functions.mint(to_address, token_id, token_uri).buildTransaction({
        'chainId': 1,  # 메인넷
        'gas': 200000,
        'gasPrice': web3.toWei('50', 'gwei'),
        'nonce': nonce,
    })

    # 서명
    signed_txn = web3.eth.account.signTransaction(txn, private_key=private_key)

    # 트랜잭션 전송
    txn_hash = web3.eth.sendRawTransaction(signed_txn.rawTransaction)
    return web3.toHex(txn_hash)

# NFT 발행 예시
to_address = 'RECIPIENT_WALLET_ADDRESS'
token_id = 1
token_uri = 'https://example.com/metadata/1'
transaction_hash = mint_nft(to_address, token_id, token_uri)

print(f'NFT 발행 완료! 트랜잭션 해시: {transaction_hash}')
```

### 코드 설명
1. **Web3 연결**: Infura를 통해 이더리움 메인넷에 연결한다.
2. **계정 정보**: NFT를 발행할 지갑 주소와 개인 키를 설정한다.
3. **NFT 컨트랙트**: NFT 스마트 컨트랙트의 ABI와 주소를 로드하여 컨트랙트 인스턴스를 생성한다.
4. **NFT 발행 함수**: `mint_nft` 함수를 통해 특정 주소에 NFT를