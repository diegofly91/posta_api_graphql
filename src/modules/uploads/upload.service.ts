
import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as sharp from 'sharp';
import * as fs from "fs";
import { ConfigService } from '../../config/config.service';
import { Configuration } from '../../config/config.keys';

@Injectable()
export class UploadService {
  constructor(
    private readonly configService: ConfigService
  ) {
    if (!fs.existsSync(this.configService.get(Configuration.DIR_LOCAL))){
        fs.mkdirSync(this.configService.get(Configuration.DIR_LOCAL),{ recursive: true });
    } 
  }
  
  public async uploadLogoCompany(image:any):Promise<string>{
       
    const { createReadStream, filename } = await image;
    const stream = createReadStream();
    const file = await this.storeUpload({ stream, filename });

    let data =  sharp(file['path']).resize({ width: 300 });
    const AWS_DIR_LOGO_COMPANY =await this.configService.get(Configuration.AWS_DIR_LOGO_COMPANY);
    let urlKey = `${AWS_DIR_LOGO_COMPANY}${file['name']}`;                
    let params =  {
        ACL:   'public-read',
        Bucket: await this.configService.get(Configuration.AWS_S3_BUCKET_NAME),
        Body:   data,
        Key:    urlKey
    }
    data = await this.s3.upload(params).promise();
    if(data){
        this.deleteImage(file['path'])
    }
    return data.Location;
  }

  
   storeUpload = async ({ stream, filename }) => {
        const name = `${Date.now().toString()}-${filename}`;
        const path = `${await this.configService.get(Configuration.DIR_LOCAL)}${name}`;
        // (createWriteStream) writes our file to the images directory
        return new Promise((resolve, reject) =>
        stream
            .pipe(fs.createWriteStream(path))
            .on("finish", () => resolve({ name, path }))
            .on("error", reject)
        );
    };

    s3 = new AWS.S3({
        endpoint: this.configService.get(Configuration.AWS_ENDPOINT),
        accessKeyId: this.configService.get(Configuration.AWS_ACCESS_KEY_ID),
        secretAccessKey: this.configService.get(Configuration.AWS_SECRET_ACCESS_KEY)
    });

    deleteImage = async (path) => {
         return await fs.unlinkSync(path);
    }
}
