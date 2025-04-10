
//For Gobal ใส export สำหรับให้ใช้ได้ทุกไฟล์
export type actionFunction = (
    prevState: any,
    formData: FormData,
) => Promise<{ message: string }>
