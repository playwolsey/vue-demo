<style>
.box {position:absolute;transform:translateX(-50%);left:50%;width:668px;margin-top:60px;}
.box p {clear:both;float:none;width:100%;}
.main label {float:left;padding:5px;display:inline;margin-left:40px;font-size:13px;color:#000;margin-right:10px;}
.space {padding-top:15px;}
.space span {font-size:13px;color:#666;}
.space span input {margin-left:-228px;border:1px solid #111;background:#444;color:#fff;}
.u-input {border:1px solid #d3d3d3;color:#555;padding:5px;float:left;width:200px;}
.u-btn {float:right;padding:3px 10px 3px 10px;color:#fff;font-size:12px;text-decoration:none;border:1px solid #555;display:inline;background:#555;border-radius:3px;}
</style>

<template>
    <div id="login">
        <div class="box">
            <p class="main">
                <label>Username: </label>
                <input name="Account" type="text" placeholder="username" class="u-input" maxlength="20">
                <label>Password: </label>
                <input name="Pass" type="password" class="u-input" maxlength="20" placeholder="userpass">	
            </p>
            <p class="space">
                <span><input name="RememberMe" type="checkbox" value="1">Remember username</span>
                <a class="u-btn" href="javascript:void(0);">Login</a>
            </p>
        </div>
    </div>
</template>
