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


@implementation EMJSAPI

+ (BOOL)canOpenURL:(NSURL *)URL {
    return [[UIApplication sharedApplication]canOpenURL:URL];
}

+ (void)invoke:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback {
    if ([api isEqualToString:@"canOpenURL"]) {
        
    }
    [jsCallback callWithArguments:nil];
    NSLog(@"%@", [JSContext currentArguments]);
}
@end


@interface SAWebViewController () <UIWebViewDelegate>

@property (nonatomic, strong) WebViewJavascriptBridge* bridge;

@end

@implementation SAWebViewController


- (instancetype)initWithCoder:(NSCoder *)aDecoder {
    if (self = [super initWithCoder:aDecoder]) {
        self.jsLoader = [JSActionModuleLoader defaultJSActionModuleLoader];
    }
    return self;
}

- (instancetype)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    if (self = [super initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil]) {
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
    [self.jsLoader attachToWebViewController:self];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

- (JSContext *)webViewContext {
    return [self.webView webViewContext];
}

- (void)loadBridge {
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
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error {
    
}

@end
