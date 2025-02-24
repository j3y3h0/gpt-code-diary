최근 KT가 스마트 보안 카메라 'KT 홈캠 안심'을 출시한 것과 관련하여, C#을 사용하여 CCTV 영상을 스트리밍하고 저장하는 간단한 애플리케이션 예제를 작성해 보았다. 이 예제는 AForge.NET 라이브러리를 사용하여 웹캠에서 비디오를 캡처하고 저장하는 기능을 포함하고 있다.

```csharp
using System;
using System.Drawing;
using System.Windows.Forms;
using AForge.Video;
using AForge.Video.DirectShow;

namespace SmartCameraApp
{
    public partial class MainForm : Form
    {
        private FilterInfoCollection videoDevices;
        private VideoCaptureDevice videoSource;

        public MainForm()
        {
            InitializeComponent();
            videoDevices = new FilterInfoCollection(FilterCategory.VideoInputDevice);
            if (videoDevices.Count > 0)
            {
                videoSource = new VideoCaptureDevice(videoDevices[0].MonikerString);
                videoSource.NewFrame += new NewFrameEventHandler(videoSource_NewFrame);
                videoSource.Start();
            }
            else
            {
                MessageBox.Show("비디오 장치가 없습니다.");
            }
        }

        private void videoSource_NewFrame(object sender, NewFrameEventArgs eventArgs)
        {
            Bitmap bitmap = (Bitmap)eventArgs.Frame.Clone();
            // 비디오 프레임을 PictureBox에 표시
            videoPictureBox.Image = bitmap;
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (videoSource != null && videoSource.IsRunning)
            {
                videoSource.SignalToStop();
                videoSource.WaitForStop();
            }
        }

        // 저장 버튼 클릭 시 호출되는 메서드
        private void saveButton_Click(object sender, EventArgs e)
        {
            if (videoPictureBox.Image != null)
            {
                videoPictureBox.Image.Save("snapshot.png");
                MessageBox.Show("스냅샷이 저장되었습니다.");
            }
            else
            {
                MessageBox.Show("저장할 이미지가 없습니다.");
            }
        }
    }
}
```

이 코드는 사용자가 웹캠의 영상을 실시간으로 보고, 특정 버튼을 클릭하여 현재 화면을 PNG 파일로 저장할 수 있는 기능을 제공한다. AForge.NET 라이브러리를 통해 비디오 장치를 활용하고, FormClosing 이벤트를 통해 애플리케이션 종료 시 비디오 스트림을 안전하게 종료하도록 구성되어 있다.