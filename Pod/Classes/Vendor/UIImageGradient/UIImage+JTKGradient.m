//
//  UIImage+JTKGradient.m
//  Jared King
//
//  Created by Jared on 2/15/13.
//  Copyright (c) 2013 Jared King. All rights reserved.
//

#import "UIImage+JTKGradient.h"

@implementation UIImage (JTKGradient)

+ (UIImage *)imageWith2ToneGradient:(UIColor *)tone1 tone2:(UIColor *)tone2 height:(CGFloat)height
{    
    CGRect rect = CGRectMake(0, 0, 1, height/[UIScreen mainScreen].scale);
    UIGraphicsBeginImageContextWithOptions(rect.size, YES, 0);
    CGContextRef context = UIGraphicsGetCurrentContext();

    CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();
    CGFloat locations[] = { 0.0, 1.0 };
    
    NSArray *colors = [NSArray arrayWithObjects:(__bridge id)tone1.CGColor, (__bridge id)tone2.CGColor, nil];
    
    CGGradientRef gradient = CGGradientCreateWithColors(colorSpace, (__bridge CFArrayRef)colors, locations);
    
    CGPoint startPoint = CGPointMake(CGRectGetMidX(rect), CGRectGetMinY(rect));
    CGPoint endPoint = CGPointMake(CGRectGetMidX(rect), CGRectGetMaxY(rect));
    
    CGContextSaveGState(context);
    CGContextAddRect(context, rect);
    CGContextClip(context);
    CGContextDrawLinearGradient(context, gradient, startPoint, endPoint, 0);
    CGContextRestoreGState(context);
    
    CGGradientRelease(gradient);
    CGColorSpaceRelease(colorSpace);
    
    CGImageRef imgRef = CGBitmapContextCreateImage(context);
    UIImage* img = [UIImage imageWithCGImage:imgRef];
    CGImageRelease(imgRef);
    CGContextRelease(context);
    return img;
}

@end
