//
//  EMWebDemoViewController.m
//  EMWebApp
//
//  Created by ryan on 15/9/18.
//  Copyright (c) 2015年 Ryan Wang. All rights reserved.
//

#import "EMWebDemoViewController.h"

@interface EMWebDemoViewController ()

@end

@implementation EMWebDemoViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self loadExamplePage];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)loadExamplePage {
//    NSURL *baseURL = [NSURL fileURLWithPath:htmlPath];
    NSURL *url = [NSURL URLWithString:@"http://192.168.19.21:8000"];
    NSURLRequest *request = [NSURLRequest requestWithURL:url cachePolicy:NSURLRequestReloadIgnoringCacheData timeoutInterval:50];
    [self.webView loadRequest:request];
}


//- (void)loadExtendJS {


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
