//
//  SAWebViewController.m
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "SAWebViewController.h"
#import "UIWebView+Ext.h"

#define JSActionScheme @"JSAction"

@interface SAWebViewController () <UIWebViewDelegate>

@end

@implementation SAWebViewController

- (void)loadView {
    self.view = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.webView = [[UIWebView alloc] initWithFrame:self.view.bounds];
    self.webView.autoresizingMask = UIViewAutoresizingFlexibleWidth|UIViewAutoresizingFlexibleHeight;
    [self.view addSubview:self.webView];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [_webView stringByEvaluatingJavaScriptFromString:@"viewWillAppear()"];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

// MARK: UIWebViewDelegate
- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
    if ([[[[request URL] scheme] uppercaseString] isEqualToString:[JSActionScheme uppercaseString]]) {
        
    }
    
    return YES;
}

- (void)webViewDidStartLoad:(UIWebView *)webView {
}

- (void)webViewDidFinishLoad:(UIWebView *)webView {
    [self.jsLoader attachToWebViewController:self];
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error {
    
}

//- (void)loadExtendJS {
//    NSString *jsPath = [[NSBundle mainBundle] pathForResource:@"EMBridge" ofType:@"js"];
//    NSString *js = [NSString stringWithContentsOfFile:jsPath encoding:NSUTF8StringEncoding error:nil];
//    [[self.webView webViewContext] evaluateScript:js];
//
//}


@end
