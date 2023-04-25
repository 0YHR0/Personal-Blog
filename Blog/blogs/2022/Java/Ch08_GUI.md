---
title: Ch08_GUI
date: 2019-06-11
tags:
 - Java
categories:
 - Java
---

# **javaFX**

![image-20230425114349183](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114349183.png)



stage--scene--Boarderpane

所有的容器，控件，形状都继承于Node

使用MVC架构

**使用scenebuilder来创建布局**

- 创建fxml文件，并且用scenebuiler打开，添加完成之后，复制其中自动创建的代码到controller中

![image-20230425114406000](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114406000.png)



+ 保存文件，可能需要修改其中的class路径

![image-20230425114422607](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425114422607.png)



+ 在main里面添加依赖关系：

```java
package application;
	
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.stage.Stage;
import javafx.scene.Parent;
import javafx.scene.Scene;



public class Main extends Application {
	static private Stage primaryStage;
	@Override
	public void start(Stage primaryStage) {
		try {
			this.primaryStage = primaryStage;
			Parent root = FXMLLoader.load(getClass().getResource("Controller.fxml"));
			primaryStage.setTitle("calculater");
			Scene scene = new Scene(root,400,400);
			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
			primaryStage.setScene(scene);
			primaryStage.show();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}

```

+ 绘制3d图形，并让他自动旋转（在fxml的基础上手动添加）

```java
public void start(Stage primaryStage) {
		try {
			this.primaryStage = primaryStage;
			FXMLLoader loader = new FXMLLoader(getClass().getResource("Controller.fxml"));
			Group group = new Group();
			group.getChildren().add(loader.load());//使用Group是为了可以手动添加元素
			Box box = new Box(50, 50, 50);//新建一个立方体
			box.setVisible(true);
			box.setLayoutX(107.0);//设置位置
			box.setLayoutY(287.0);
			Rotate ro = new Rotate(5, 5, 5, 5);//设置旋转的中心点
			ro.setAxis(new Point3D(1, 1, 1));//设置旋转轴
			box.getTransforms().add(ro);//把box与旋转依赖起来
			KeyValue kv1 = new KeyValue(ro.angleProperty(), 0);
			KeyFrame kf1 = new KeyFrame(Duration.seconds(0), kv1);//设置第一个位置和时间
			KeyValue kv2 = new KeyValue(ro.angleProperty(), 360);
			KeyFrame kf2 = new KeyFrame(Duration.seconds(2), kv2);//设置第二个位置和时间
			Timeline timeline = new Timeline();
			timeline.getKeyFrames().addAll(kf1, kf2);//新建时间线
			timeline.setAutoReverse(false);
			timeline.setCycleCount(Timeline.INDEFINITE);//无限循环
			group.getChildren().add(box);//添加组件
			primaryStage.setTitle("calculater");
			Scene scene = new Scene(group);
			PerspectiveCamera camera = new PerspectiveCamera();
			scene.setCamera(camera);
			scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
			primaryStage.setScene(scene);
			primaryStage.show();
			timeline.play();//开始旋转
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
```

