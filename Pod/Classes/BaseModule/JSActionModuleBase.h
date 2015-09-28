;//
//  JSActionModuleBase.h
//  AppSettings
//
//  Created by ryan on 15/9/11.
//  Copyright (c) 2015年 Ryan. All rights reserved.
//

#import "JSActionModule.h"

@protocol JSActionModuleBase <JSActionModule>

- (void)onMenuShareTimeline;
- (void)changeNavigationBarColor;
@end


@interface JSActionModuleBase : JSActionModule<JSActionModuleBase>


@end
