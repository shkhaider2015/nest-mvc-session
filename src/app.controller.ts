import { Controller, Get, Post, Redirect, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('login')
  index() {
    return;
  }

  @Post('/login')
  @Redirect('/home')
  login(@Res() res: Response): void {
    // res.redirect('/home');
  }

  @Get('/home')
  @Render('home')
  getHome() {
    return;
  }

  @Get('/profile')
  @Render('profile')
  getProfile() {
    return;
  }

  @Get('/logout')
  @Redirect("/")
  logout(@Res() res: Response): void {
    // res.redirect('/');
  }
}
