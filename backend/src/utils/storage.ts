import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

class Storage {
  private static instance: Storage;
  private s3Client: S3Client;

  constructor() {
    if (Storage.instance) return Storage.instance;
    this.s3Client = new S3Client({
      region: 'auto',
      endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY as string,
      },
    });
    Storage.instance = this;
  }

  public async upload(id: string, base64: string) {
    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET,
      Key: `images/${id}`,
      Body: Buffer.from(base64, 'base64'),
      ContentType: 'image/jpeg',
      ACL: 'public-read',
    });
    await this.s3Client.send(command);
    return `${process.env.CLOUDFLARE_PUBLIC_URL}/images/${id}`;
  }

  public async delete(id: string) {
    const command = new DeleteObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET,
      Key: `images/${id}`,
    });
    await this.s3Client.send(command);
  }
}

export default Storage;
