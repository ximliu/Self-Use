// URL = ^https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/

let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2999-10-10T03:27:34";
$done({body:JSON.stringify(obj)})