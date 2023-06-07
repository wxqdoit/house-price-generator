<template>

    <div class="index">
        <div class="main-content">
            <main>
                <div class="finder-main">
                    <div class="search-header">Wallet Address</div>
                    <div></div>
                    <div class="search-box">
                        <div class="input-box flex"
                             :class="{'focused':focused && addrTrue,'input-box-err':!addrTrue}">
                            <input type="text"
                                   id="searchInput"
                                   v-model="address"
                                   autocomplete="off"
                                   placeholder="Address You Want To Search"
                                   @focus="inputFocus(true)" @blur="inputFocus(false)">
                            <div class="search-btn" @click="toSearch"><i class="el-icon-search"></i></div>
                        </div>
                    </div>
                    <div class="hot-address">
                        <h3 class="coin-addition">
                            <span>Search History</span>
                            <span><i class="el-icon-delete"></i></span>
                        </h3>
                        <div class="s-links-box flex">
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span>Justin Sun:&nbsp;0xff2...3f2</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span>eth.eth:&nbsp;0xef2...3f2</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-chat-dot-square"></i>&nbsp;Twitter</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-document"></i>&nbsp;WhitePaper</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-link"></i>&nbsp;Website</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-help"></i>&nbsp;Explorer</span>
                            </a>
                        </div>
                    </div>
                    <div class="hot-address">
                        <h3 class="coin-addition">Hot Address</h3>
                        <div class="s-links-box flex">
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span>Justin Sun:&nbsp;0xff2...3f2</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-help"></i>&nbsp;Explorer</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-chat-dot-square"></i>&nbsp;Twitter</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-document"></i>&nbsp;WhitePaper</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-link"></i>&nbsp;Website</span>
                            </a>
                            <a class="token-flag token-like" href="https://ethereum.org/en/">
                                <span><i class="el-icon-help"></i>&nbsp;Explorer</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>

<script>

export default {
    name: 'AddressFinder',
    data() {
        return {
            focused: false,
            address: '',
            searchInput: null,
            addrTrue: true,
        }
    },
    mounted() {
        this.searchInput = document.querySelector('#searchInput')
        this.searchInput.addEventListener("keyup", this.keyParseHandler);
    },

    methods: {
        inputFocus(type) {
            this.focused = type
            if (type === false && this.address !== '') {
                let res = this.address.match(/^0x[a-fA-F0-9]{40}$/)
                this.addrTrue = res !== null
            }
        },

        keyParseHandler(e) {
            event.preventDefault();
            if (event.keyCode === 13) {
                this.toSearch()
            }
        },
        toSearch() {
            let res = this.address.match(/^0x[a-fA-F0-9]{40}$/)
            this.addrTrue = res !== null
            if (res !== null) {
                this.$router.push({path: '/address/' + this.address})
            }
        }
    },
    beforeRouteLeave(f, t, next) {
        this.searchInput.removeEventListener("keyup", this.keyParseHandler);
        next()

    }
}
</script>

<style>
.hot-address {
    margin: 20px 0;
}

.placeholder-active {
    top: -10px !important;
    color: #979797;

}

.placeholder {
    position: absolute;
    z-index: 0;
    top: 12px;
    padding: 0 5px;
    height: 24px;
    background-color: #1a1a1a;
}

.search-btn {
    text-align: center;
    color: #979797;
    cursor: pointer;
    width: 40px;
}

.search-btn:hover {
    color: rgba(3, 210, 154, 0.8);
}


.focused {
    border: 1px solid rgba(3, 210, 154, 0.8) !important;
    transition: border 0.2s !important;
}


.input-box {
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 4px;
    padding-left: 16px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid rgba(3, 210, 154, 0.5);
    transition: border 0.2s;
    box-shadow: 0 0px 5px 0 rgba(0, 253, 75, 0.6);
}

.input-box-err {
    border: 1px solid rgb(255, 25, 25);
    box-shadow: 0 0px 5px 0 rgb(247, 90, 90);
}


input::placeholder {
    font-size: 14px;
    color: #979797;
}

input:focus .input-box {
    border: 1px solid rgba(3, 210, 154, 0.1)
}

input {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    outline: none;
    min-width: 1px;
    background-color: transparent;
    border: none;
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 24px;
    transition: width 100ms ease-in 0s;
    cursor: text;
    color: rgb(201, 207, 212);
}

.finder-main {
    max-width: 640px;
    margin: 50px auto;
    padding: 20px;
}

.search-header {
    font-size: 18px;
    color: #eeeeee;
    margin: 20px 0;
}
</style>
