
import { Scalar, CustomScalar  } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload'
import { ValueNode } from 'graphql';
import { BadRequestException } from '@nestjs/common'
import { GraphQLUpload } from "apollo-server-express";


// export type ImageProps = Promise<FileUpload>


@Scalar('Image')
export class Image {
  description = 'Upload custom scalar type';
  supportedFormats = ['image/jpg','image/jpeg','image/png']

  async parseValue(value) {
   const {filename, mimetype} = await value;
//    console.log(value)
    if (!this.supportedFormats.includes(mimetype))
      throw new BadRequestException(
        `Unsupported file format. Supports: ${this.supportedFormats.join(' ')}.`
      )
    return value;
  }

  serialize(value: any) {
    return GraphQLUpload.serialize(value);
  }

  parseLiteral(ast) {
    return GraphQLUpload.parseLiteral(ast, ast.value);
  }
}
// @Scalar('Image')
// export class Image implements CustomScalar<ImageProps, ImageProps> {
//   description = 'Upload custom scalar type';
//   supportedFormats = ['image/jpg','image/jpeg','image/png']
  
//   async parseValue(value) {
//     const upload = await value
//     if (!this.supportedFormats.includes(upload.mimetype))
//       throw new BadRequestException(
//         `Unsupported file format. Supports: ${this.supportedFormats.join(' ')}.`
//       )
//     return upload
//   }

//   serialize(value: ImageProps) {
//     return value
//   }

//   parseLiteral(file: ValueNode) {
//     if (file.kind === 'ObjectValue') {
//       const fileObject = file as any
//       if (
//         typeof fileObject.filename === 'string' &&
//         typeof fileObject.mimetype === 'string' &&
//         typeof fileObject.encoding === 'string' &&
//         typeof fileObject.createReadStream === 'function'
//       )
//         return Promise.resolve(fileObject)
//     }
//     return null
//   }
// }