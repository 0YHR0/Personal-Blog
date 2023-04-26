---
title: Ch05 VerificationCode
date: 2020-01-25
tags:
 - Java
 - Spring
categories:
 - SpringMVC
---

# 验证码实现方式

![image-20230426154037715](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154037715.png)

```html
<div>
  <i class="iconfont">&#xe664;</i>
  <input type="text" placeholder="输入四位验证码" name="captcha" id="captcha" onkeypress="onInputKeyup();" style="width:105px;" />
  <img src="code.do" id="createCheckCode" onclick="change();" align="middle" style="width:150px;"/>
</div>
```



Controller

```java
@Controller
public class VerificationController {
    @ResponseBody
    @GetMapping("/code.do")
    public void validatecode(HttpServletRequest request, HttpServletResponse response) throws IOException {
        //第一个参数是生成的验证码，第二个参数是生成的图片
        Object[] objs = ImageUtil.createImage();
        //将验证码存入Session
        request.getSession(true).setAttribute("validateCode",objs[0]);
        //将图片输出给浏览器
        BufferedImage image = (BufferedImage) objs[1];
        // 禁止图像缓存。
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/jpeg");
        OutputStream os = response.getOutputStream();
        ImageIO.write(image, "jpeg", os);
        os.flush();
    }


}
```



ImageUtil：

```java
public class ImageUtil {
    public static Object[] createImage() {
        Object[] obj = new Object[2];
        int width = 60;
        // 验证码图片的高度。
        int height = 18;
        // 验证码字符个数
        int codeCount = 4;
        int x = 0;
        // 字体高度
        int fontHeight;
        int codeY;
        x = width / (codeCount + 1);
        fontHeight = height - 2;
        codeY = height - 4;
        char[] codeSequence = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J',
                'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
                'X', 'Y','3', '4', '5', '6', '7', '8', '9','a','b','c','d','e','f','g','h',
                'j','k','m','n','r','s','t','u','v','w','x','y'};
        //定义图像buffer
        BufferedImage buffImg = new BufferedImage(
                width, height,BufferedImage.TYPE_INT_RGB);
        Graphics2D g = buffImg.createGraphics();
        //创建一个随机数生成器类
        Random random = new Random();
        //将图像填充为白色
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, width, height);
        //创建字体，字体的大小应该根据图片的高度来定。
        Font font = new Font("Fixedsys", Font.PLAIN, fontHeight-5);
        //设置字体。
        g.setFont(font);
        //画边框
        g.setColor(Color.WHITE);
        g.drawRect(0, 0, width - 2, height - 2);

        //随机产生干扰线，使图象中的认证码不易被其它程序探测到。
        g.setColor(Color.BLACK);
        for(int i = 0; i < 5; i++)
        {
            int xx = random.nextInt(width);
            int yy = random.nextInt(height);
            int xl = random.nextInt(12);
            int yl = random.nextInt(12);
            g.drawLine(xx, yy, x + xl, yy + yl);
        }
        //randomCode用于保存随机产生的验证码，以便用户登录后进行验证。
        StringBuffer randomCode = new StringBuffer();
        int red = 0, green = 0, blue = 0;

        //随机产生codeCount数字的验证码。
        for (int i = 0; i < codeCount; i++) {
            //得到随机产生的验证码数字。
            String strRand = String.valueOf(codeSequence[random.nextInt(codeSequence.length)]);
            //产生随机的颜色分量来构造颜色值，这样输出的每位数字的颜色值都将不同。
        red = random.nextInt(255);
        green = random.nextInt(255);
        blue = random.nextInt(255);

            //用随机产生的颜色将验证码绘制到图像中。
            g.setColor(new Color(red, green, blue));
            g.drawString(strRand, (i + 1) * x, codeY-2);

            //将产生的四个随机数组合在一起。
            randomCode.append(strRand);
        }
        obj[0] = randomCode.toString();
        obj[1] = buffImg;
        return obj;
    }
}
```

