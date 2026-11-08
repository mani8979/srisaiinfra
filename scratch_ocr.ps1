Add-Type -AssemblyName System.Drawing
[Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime] | Out-Null

function Get-OcrText($imgPath) {
    $file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($imgPath).GetAwaiter().GetResult()
    $stream = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read).GetAwaiter().GetResult()
    $decoder = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream).GetAwaiter().GetResult()
    $bitmap = $decoder.GetSoftwareBitmapAsync().GetAwaiter().GetResult()
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    $result = $engine.RecognizeAsync($bitmap).GetAwaiter().GetResult()
    return $result.Text
}

$images = @(
    'd:\Saisri\ppt_extracted\ppt\media\image19.jpeg',
    'd:\Saisri\ppt_extracted\ppt\media\image26.png',
    'd:\Saisri\ppt_extracted\ppt\media\image2.jpeg',
    'd:\Saisri\Screenshot 2026-11-08 173911.png',
    'd:\Saisri\WhatsApp Image 2026-11-08 at 5.33.43 PM.jpeg'
)

foreach ($img in $images) {
    Write-Host "================ $img ================"
    try {
        $text = Get-OcrText $img
        Write-Host $text
    } catch {
        Write-Host "Error: $_"
    }
}

