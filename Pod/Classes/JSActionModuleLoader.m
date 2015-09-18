//
//  JSActionLoader.m
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "JSActionModuleLoader.h"
#import "SAWebViewController.h"
#import "SAWebViewController+Ext.h"
#import "JSActionModuleBase.h"

@interface JSActionModuleLoader ()

@property (nonatomic, strong) NSMutableArray *modules;
@property (nonatomic, strong) SAWebViewController *webViewController;

@end

@implementation JSActionModuleLoader

+ (instancetype)defaultJSActionModuleLoader {
    static JSActionModuleLoader *loader = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        loader = [self new];
    });
    return loader;
}

- (instancetype)init {
    if (self = [super init]) {
        self.modules = [NSMutableArray array];
        JSActionModuleBase *baseModule = [JSActionModuleBase new];
        [self installJSModule:baseModule];
    }
    return self;
}

- (void)installJSModule:(JSActionModule *)module {
    [self.modules addObject:module];
}

- (void)uninstallJSModule:(JSActionModule *)module {
    [self.modules removeObject:module];
}


- (void)installJSModules:(NSArray *)modules {
    [self.modules addObjectsFromArray:modules];
}

- (void)uninstallJSModules:(NSArray *)modules {
    [self.modules removeObjectsInArray:modules];
}

- (void)attachToWebViewController:(SAWebViewController *)webViewController {
    self.webViewController = webViewController;
    [self _installModules];
}

- (void)deattachToWebViewController:(SAWebViewController *)webViewController {
    self.webViewController = nil;
}

- (JSContext *)webViewContext {
    return [JSActionModuleLoader defaultJSActionModuleLoader].webViewContext;
}

- (UIWebView *)webView {
    return self.webViewController.webView;
}

- (void)_installModules {
    
}



@end
