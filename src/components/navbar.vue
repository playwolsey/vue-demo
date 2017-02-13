<style>
.navbar-container .navbar {background:rgba(43,43,43,.75);height:40px;margin-bottom:10px;position:fixed;z-index:2;left:0;top:0;right:0;}
.navbar-container .navbar .navbar-brand {display:inline-block;width:110px;height:40px;text-decoration:none;color:#269f3f;position:absolute;left:0;line-height:39px;}
.navbar-container .navbar .nav {position:absolute;z-index:3;width:800px;min-width:400px;left:50%;top:0;height:40px;margin:0 0 0 -585px;list-style:none;}
.navbar-container .navbar .nav > li {float:left;position:relative;padding:0 5px;}
.navbar-container .navbar .nav > li > a {display:block;color:#999;font-size:16px;line-height:39px;padding:0 15px;text-decoration:none;}
</style>

<template>
    <div id="navbar">
        <div class="navbar-container"> 
            <div class="navbar"> 
                <a href="/" class="navbar-brand">NOTHING</a> 
                <ul class="nav"> 
                    <li><router-link to="/login"><span class="nav-icon-text">登录</span></router-link></li>  
                    <li><router-link to="/books"><span class="nav-icon-text">图书</span></router-link></li>  
                    <li><router-link to="/movies"><span class="nav-icon-text">电影</span></router-link></li>
                    <li><router-link to="/help"><span class="nav-icon-text">帮助</span></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
            msg: ''
        }
    }
}
</script>
