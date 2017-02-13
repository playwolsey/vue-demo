<style>
.search-wrap {width:660px;margin:80px auto 0;}
.search-input {width:514px;border:1px solid #d3d3d3;border-radius:3px;height:42px;line-height:42px;padding:0 8px;}
.search-btn { height:44px;width:113px;text-align:center;font-size:16px;background-color:#555;color:#fff;border:none;border-radius:3px;margin-left:15px;cursor:pointer;}
</style>

<template>
    <div id="book">
        <div class="search-wrap">
            <input class="search-input" type="search" placeholder="搜索书名" v-model="keyword" @keyup.enter="searchBook">
            <button class="search-btn" v-on:click="searchBook">搜索</button>
        </div>
        <div class="movie-list">
            <div class="movie-list-item" v-for="book in books">
                <div class="content">
                    <a :href="book.alt" target="_blank"><img :src="book.images.medium" :alt="book.title"></a>
                    <div class="info">
                        <div class="mname">
                            <span class="name-txt"><a :href="book.alt" target="_blank">{{book.title}}</span>
                            <span class="rate">{{book.rating.average}}</span>
                        </div>
                        <div class="comment">{{book.summary}}</div>
                        <div class="year">{{book.author[0]}}</div>
                        <div class="price">&yen;{{book.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
            books: []
        }
    },
    methods: {
        searchBook() {
            if (this.keyword.length === 0) {
                return;
            }

            this.$http.jsonp('https://api.douban.com/v2/book/search?count=10&q=' + this.keyword, {}, {
                emulateJSON: true
            }).then(function(response) {
                this.books = response.data.books
            }, function(response) {
                console.log(response)
            });
        }
    }
}
</script>
