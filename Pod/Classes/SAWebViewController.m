//
//  SAWebViewController.m
//  AppSettings
//
//  Created by ryan on 15/9/9.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "SAWebViewController.h"
#import "UIWebView+Ext.h"
#import "JSActionModuleLoader.h"
#import <WebViewJavascriptBridge/WebViewJavascriptBridge.h>

#define JSActionScheme @"JSAction"

@interface SAWebViewController () <UIWebViewDelegate>

@property WebViewJavascriptBridge* bridge;

@end

@implementation SAWebViewController

- (instancetype)init {
    if (self = [super init]) {
        self.jsLoader = [JSActionModuleLoader defaultJSActionModuleLoader];
    }
    return self;
}

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
    [self loadBridge];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

- (void)loadBridge {
    if(_bridge) {
        return;
    }
    [WebViewJavascriptBridge enableLogging];
    
    _bridge = [WebViewJavascriptBridge bridgeForWebView:self.webView webViewDelegate:self handler:^(id data, WVJBResponseCallback responseCallback) {
        NSLog(@"ObjC received message from JS: %@", data);
        responseCallback(@"Response for message from ObjC");
    }];
    
    [_bridge registerHandler:@"testObjcCallback" handler:^(id data, WVJBResponseCallback responseCallback) {
        NSLog(@"testObjcCallback called: %@", data);
        responseCallback(@"Response from testObjcCallback");
    }];
    

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

//    NSString *jsPath = [[NSBundle mainBundle] pathForResource:@"EMBridge" ofType:@"js"];
//    NSString *js = [NSString stringWithContentsOfFile:jsPath encoding:NSUTF8StringEncoding error:nil];
//    [[self.webView webViewContext] evaluateScript:js];
//
//}


@end
