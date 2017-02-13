<style>
.clearfix {clear:both;}
.movie-list {width:660px;margin:0 auto;text-align:left;}
.movie-list .movie-list-item {height:190px;line-height: 190px;border-bottom:dashed 1px #DDD;zoom:1;width:100%;position:relative;margin:0 20px;}
.movie-list .movie-list-item .content {height:148px;line-height:148px;position:absolute;top:40px;left:15%;}
.movie-list .movie-list-item .content img {position:absolute;clip:rect(0px 100px 128px 0);}
.movie-list .movie-list-item .content .info {color:#5c5c5c;width:300px;font-size:13px;position:absolute;left:145px;}
.movie-list .movie-list-item .content .info div {height:30px;line-height:30px;width:100%;}
.movie-list .movie-list-item .content .info .name-txt {display:inline-block;max-width:70%;float:left;font-size:14px;}
.movie-list .movie-list-item .content .info .name-txt a {color:#37a;text-decoration:none;}
.movie-list .movie-list-item .content .info .rate {margin-left:8px;}
.name-txt, .comment, .year {text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}
</style>

<template>
    <div id="movie">
        <div class="box-card">
            <div class="clearfix">
                <h1 style="line-height:36px;color:#269f3f;">Most Favrioutes Movies Lists</h2>
            </div>
            <div class="movie-list">
                <div class="movie-list-item" v-for="article in articles">
                    <div class="content">
                        <a :href="article.alt" target="_blank"><img :src="article.images.medium" :alt="article.title"></a>
                        <div class="info">
                            <div class="mname">
                                <span class="name-txt"><a :href="article.alt" target="_blank">{{article.title}}</span>
                                <span class="rate">{{article.rating.average}}</span>
                            </div>
                            <div class="comment">{{article.collect_count}}人评价</div>
                            <div class="year">{{article.year}}年</div>
                        </div>
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
            articles: []
        }
    },
    mounted: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
            emulateJSON: true
        }).then(function(response) {
            this.articles = response.data.subjects
        }, function(response) {
            console.log(response)
        });
    }
}
</script>
