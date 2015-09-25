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
@property (nonatomic, weak) SAWebViewController *webViewController;

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
    
    [self bindActionsToContext:[self.webViewController webViewContext]];
}

- (void)deattachToWebViewController:(SAWebViewController *)webViewController {
    self.webViewController = nil;
}

//- (UIWebView *)webView {
//    return self.webViewController.webView;
//}

- (void)_installModules {
    
}

// JSActionExport
- (BOOL)invoke:(NSString *)api params:(NSString *)params callback:(JSValue *)jsCallback {
    NSLog(@"api :%@, params: %@, jsCallback: %@",api, params, jsCallback );
    

    [jsCallback callWithArguments:nil];
    return YES;
}

- (void)bindActionsToContext:(JSContext *)context {
    context[@"EMJSAPI"] = self;
    [context evaluateScript:@"var console = {}"];
    context[@"console"][@"log"] = ^(NSString *message) {
        NSLog(@"Javascript log: %@",message);
    };
    
    context.exceptionHandler = ^(JSContext *context, JSValue *exception) {
        NSLog(@"JS Error: %@", exception);
    };
}

@end
