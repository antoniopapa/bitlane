<?php

namespace App\Http\Controllers;

use App\File;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function index()
    {
        return File::all();
    }

    public function show($id)
    {
        return File::find($id);
    }

    public function store(Request $request)
    {
        try {
            /** @var User $user */
            $user = Auth::user();
            $storage = Storage::disk('uploads');
            $file = $request->file('file');
            $ext = $file->extension();
            $name = str_replace('.' . $ext, '', $file->getClientOriginalName());

            if (!in_array($ext, ['pdf', 'doc', 'docx', 'xls'])) {
                return response([
                    'error' => 'Invalid Extension'
                ], 400);
            }

            if ($storage->exists("uploads/{$name}.{$ext}")) {
                $i = 1;

                while ($storage->exists("uploads/{$name}-{$i}.{$ext}")) {
                    $i++;
                }

                $name = "{$name}-{$i}";
            }

            $storage->putFileAs('uploads', $file, "{$name}.{$ext}");

            $doc = File::create([
                'company_id' => $user->company_id,
                'name' => $name,
                'ext' => $ext,
                'path' => 'uploads/'
            ]);

            return $doc;
        } catch (\Exception $exception) {
            return response([
                'error' => $exception->getMessage()
            ], 400);
        }
    }

    public function destroy($id)
    {
        $file = File::find($id);
        Storage::disk('uploads')->delete('uploads/' . $file->file_name);
        $file->delete();

        return response(null, JsonResponse::HTTP_NO_CONTENT);
    }
}
